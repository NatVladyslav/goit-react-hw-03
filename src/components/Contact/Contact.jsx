import css from "./Contact.module.css"
import { IoMdPerson } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
const Contact = ({id, name, number, deleteUser}) => {
  return (
    <div className={css.contactItem}>
      <div className={css.nameAndNumber}>
        <p><IoMdPerson className={css.icon} /> {name}</p>
        <p><FaPhoneAlt className={css.icon} />   {number}</p>
      </div>
          <button className={css.button} type="button" onClick={() => deleteUser(id)}>Delete</button>
    </div>
  )
}

export default Contact
