// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

use std::time::Duration;
use sui_macros::sim_test;
use sui_test_transaction_builder::publish_basics_package_and_make_counter;
use sui_types::base_types::dbg_addr;
use test_cluster::TestClusterBuilder;

#[sim_test]
async fn test_validator_tx_finalizer_fastpath_tx() {
    let cluster = TestClusterBuilder::new()
        .with_num_validators(7)
        // Make epoch duration large enough so that reconfig is never triggered.
        .with_epoch_duration_ms(1000 * 1000)
        .build()
        .await;
    let tx_data = cluster
        .test_transaction_builder()
        .await
        .transfer_sui(None, dbg_addr(1))
        .build();
    let tx = cluster.sign_transaction(&tx_data);
    let tx_digest = *tx.digest();
    cluster
        .authority_aggregator()
        .authority_clients
        .values()
        .next()
        .unwrap()
        .handle_transaction(tx, None)
        .await
        .unwrap();
    tokio::time::sleep(Duration::from_secs(120)).await;
    for node in cluster.all_node_handles() {
        node.with(|n| assert!(n.state().is_tx_already_executed(&tx_digest).unwrap()));
    }
}

#[sim_test]
async fn test_validator_tx_finalizer_consensus_tx() {
    let cluster = TestClusterBuilder::new()
        .with_num_validators(7)
        // Make epoch duration large enough so that reconfig is never triggered.
        .with_epoch_duration_ms(1000 * 1000)
        .build()
        .await;
    let (package, counter) = publish_basics_package_and_make_counter(&cluster.wallet).await;
    let tx_data = cluster
        .test_transaction_builder()
        .await
        .call_counter_increment(package.0, counter.0, counter.1)
        .build();
    let tx = cluster.sign_transaction(&tx_data);
    let tx_digest = *tx.digest();
    cluster
        .authority_aggregator()
        .authority_clients
        .values()
        .next()
        .unwrap()
        .handle_transaction(tx, None)
        .await
        .unwrap();
    tokio::time::sleep(Duration::from_secs(120)).await;
    for node in cluster.all_node_handles() {
        node.with(|n| assert!(n.state().is_tx_already_executed(&tx_digest).unwrap()));
    }
}
