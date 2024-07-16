// Copyright (c) The Move Contributors
// SPDX-License-Identifier: Apache-2.0

// Arena Definitions

use std::mem::MaybeUninit;

use bumpalo::Bump;

pub struct Arena(Bump);

impl Arena {
    pub fn new() -> Self {
        Arena(Bump::new())
    }

    pub fn alloc_slice<T>(&self, items: impl ExactSizeIterator<Item = T>) -> *mut [T] {
        let slice = self.0.alloc_slice_fill_iter(items);
        slice as *mut [T]
    }
}

/// Returns a pointer to a slice, but nulled. This must be set before use.
pub fn null_ptr<T>() -> *const [T] {
    unsafe { MaybeUninit::<*const [T]>::zeroed().assume_init() }
}

pub fn ref_slice<'a, T>(value: *const [T]) -> &'a [T] {
    unsafe { &*value }
}

pub fn mut_to_ref_slice<'a, T>(value: *mut [T]) -> &'a [T] {
    unsafe { &*value }
}

pub fn to_mut_ref_slice<'a, T>(value: *mut [T]) -> &'a mut [T] {
    unsafe { &mut *value }
}

pub fn to_ref<'a, T>(value: *const T) -> &'a T {
    unsafe { &*value as &T }
}

pub fn to_mut<'a, T>(value: *const T) -> *mut T {
    value as *mut T
}
