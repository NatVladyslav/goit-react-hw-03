import './App.css'
import { useState } from 'react'
import ContactForm from './components/ContactForm/ContactForm'
import SearchBox from './components/SearchBox/SearchBox'
import ContactList from './components/ContactList/ContactList'

import contactsData from '../ContactsData.json'

function App() {  
  const [contacts, setContacts] = useState(contactsData);
  const [filter, setFilter] = useState("");

  const addUser = (newUser) => {
    setContacts((prevContacts) => [...prevContacts, newUser])
  }

  const deleteUser = (userId) => {
    const updatedlist = contacts.filter(item => item.id !== userId);
    setContacts(updatedlist);
  }

  const filteredList = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addUser={addUser} />
      <SearchBox filter={filter} onFilter={setFilter} />
      <ContactList contactsList={filteredList} deleteUser={deleteUser} />
    </div>
  )
}

export default App
