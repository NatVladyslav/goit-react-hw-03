import css from "./ContactList.module.css"
import Contact from "../Contact/Contact"
const ContactList = ({ contactsList, deleteUser }) => {
  return (
    <><h2 className={css.title}>Contact list</h2>
    <div className={css.contactList}>
      {contactsList.map(item => {
        return <Contact key={item.id} id={item.id} name={item.name} number={item.number} deleteUser={deleteUser}/>
      })}
    </div></>
  );
}

export default ContactList
