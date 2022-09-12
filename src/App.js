import { useState, useEffect } from 'react';
import styles from './App.css';

import { db } from './firebase-config';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import Child from './delete';
function App() {
  const [newName, setNewName] = useState('');
  const [newContact, setNewContact] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newDate, setNewDate] = useState("");
  const userID = "";
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, 'users');
  const createUser = async () => {
    await addDoc(usersCollectionRef, {
      name: newName,
      contact: newContact,
      content: newContent,
      date: new Date().toLocaleDateString()
    });
    window.location.reload(false);
  };
  useEffect(() => {

    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(data);
    }
    getUsers();
  }, []);
  return (
    <div className="App">

      <div class="container">
        <div class="table-wrapper">
          <div class="table-title">
            <div class="row">
              <div class="col-sm-6">
                <h2>MCIT Notice Board</h2>
              </div>
              <div class="col-sm-6">
                <a href="https://school-18507.web.app/social.html" class="btn btn-primary" data-toggle="modal"><i
                  class="material-icons">&#xE147;</i> <span>Back to Campus</span></a>
                <a href="#addEmployeeModal" class="btn btn-success" data-toggle="modal"><i
                  class="material-icons">&#xE147;</i> <span>Add New Notice</span></a>
              </div>
            </div>
          </div>
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>Contact</th>
                <th>Content</th>
                <th>Date Posted</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => {
                return (
                  <tr>
                    <td>{user.name}</td>
                    <td>{user.contact}</td>
                    <td>{user.content}</td>
                    <td>{user.date}</td>
                    <td>
                      <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons"
                        data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                    </td>
                    <Child parentToChild={user.id} />
                  </tr>
                );
              }
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div id="addEmployeeModal" class="modal fade">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Add New Post</h4>
              <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control"
                  onChange={(event) => { setNewName(event.target.value) }}
                  required />
              </div>
              <div class="form-group">
                <label>Contact Info (email, slack, phone)</label>
                <input type="text" class="form-control"
                  onChange={(event) => { setNewContact(event.target.value) }}
                  required />
              </div>
              <div class="form-group">
                <label>Content</label>
                <textarea class="form-control"
                  onChange={(event) => { setNewContent(event.target.value) }}
                  required />
              </div>
            </div>
            <div class="modal-footer">
              <input type="button" class="btn btn-default" data-dismiss="modal" value="Cancel" />
              <input type="submit" class="btn btn-success" value="Add" onClick={createUser} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default App;
