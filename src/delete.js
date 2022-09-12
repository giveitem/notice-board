import React from 'react'
import './App.css';
import { db } from './firebase-config';
import { deleteDoc, doc } from 'firebase/firestore';
const deleteUser = async (id) => {
    const userDoc = doc(db, 'users', id);
    await deleteDoc(userDoc);
    window.location.reload(false);
};
export default function Child({ parentToChild }) {
    return (
        <div id="deleteEmployeeModal" class="modal fade">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Delete Notice</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    </div>
                    <div class="modal-body">
                        <p>Are you sure you want to delete these Records?</p>
                        <p class="text-warning"><small>This action cannot be undone.</small></p>
                    </div>
                    <div class="modal-footer">
                        <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel" />

                        <input type="submit" class="btn btn-danger" value="Delete" onClick={() => { deleteUser(parentToChild) }} />
                    </div>
                </div>
            </div>
        </div>
    )
}