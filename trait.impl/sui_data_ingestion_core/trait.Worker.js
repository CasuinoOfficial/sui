(function() {var implementors = {
"sui_analytics_indexer":[["impl <a class=\"trait\" href=\"sui_data_ingestion_core/trait.Worker.html\" title=\"trait sui_data_ingestion_core::Worker\">Worker</a> for <a class=\"struct\" href=\"sui_analytics_indexer/struct.Processor.html\" title=\"struct sui_analytics_indexer::Processor\">Processor</a>"],["impl&lt;S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.202/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> + <a class=\"trait\" href=\"sui_analytics_indexer/trait.ParquetSchema.html\" title=\"trait sui_analytics_indexer::ParquetSchema\">ParquetSchema</a> + 'static&gt; <a class=\"trait\" href=\"sui_data_ingestion_core/trait.Worker.html\" title=\"trait sui_data_ingestion_core::Worker\">Worker</a> for <a class=\"struct\" href=\"sui_analytics_indexer/analytics_processor/struct.AnalyticsProcessor.html\" title=\"struct sui_analytics_indexer::analytics_processor::AnalyticsProcessor\">AnalyticsProcessor</a>&lt;S&gt;"]],
"sui_bridge_indexer":[["impl Worker for <a class=\"struct\" href=\"sui_bridge_indexer/sui_worker/struct.SuiBridgeWorker.html\" title=\"struct sui_bridge_indexer::sui_worker::SuiBridgeWorker\">SuiBridgeWorker</a>"]],
"sui_data_ingestion":[["impl Worker for <a class=\"struct\" href=\"sui_data_ingestion/struct.BlobWorker.html\" title=\"struct sui_data_ingestion::BlobWorker\">BlobWorker</a>"],["impl Worker for <a class=\"struct\" href=\"sui_data_ingestion/struct.KVStoreWorker.html\" title=\"struct sui_data_ingestion::KVStoreWorker\">KVStoreWorker</a>"],["impl Worker for <a class=\"struct\" href=\"sui_data_ingestion/struct.ArchivalWorker.html\" title=\"struct sui_data_ingestion::ArchivalWorker\">ArchivalWorker</a>"]],
"sui_indexer":[["impl&lt;S, T&gt; <a class=\"trait\" href=\"sui_data_ingestion_core/trait.Worker.html\" title=\"trait sui_data_ingestion_core::Worker\">Worker</a> for <a class=\"struct\" href=\"sui_indexer/handlers/objects_snapshot_processor/struct.ObjectsSnapshotProcessor.html\" title=\"struct sui_indexer::handlers::objects_snapshot_processor::ObjectsSnapshotProcessor\">ObjectsSnapshotProcessor</a>&lt;S, T&gt;<span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"sui_indexer/store/indexer_store/trait.IndexerStore.html\" title=\"trait sui_indexer::store::indexer_store::IndexerStore\">IndexerStore</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,\n    T: R2D2Connection + 'static,</span>"],["impl&lt;S, T&gt; <a class=\"trait\" href=\"sui_data_ingestion_core/trait.Worker.html\" title=\"trait sui_data_ingestion_core::Worker\">Worker</a> for <a class=\"struct\" href=\"sui_indexer/handlers/checkpoint_handler/struct.CheckpointHandler.html\" title=\"struct sui_indexer::handlers::checkpoint_handler::CheckpointHandler\">CheckpointHandler</a>&lt;S, T&gt;<span class=\"where fmt-newline\">where\n    S: <a class=\"trait\" href=\"sui_indexer/store/indexer_store/trait.IndexerStore.html\" title=\"trait sui_indexer::store::indexer_store::IndexerStore\">IndexerStore</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'static,\n    T: R2D2Connection + 'static,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()