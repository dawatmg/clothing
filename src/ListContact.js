import React from 'react'
import './App.css';



var listStyle
function ListContacts(props){
  return(
    <div style={listStyle}>
    <ol className='contact-list'>
      {props.contacts.map((contacts)=>{
        return(
          <li key={contacts.id}>
            <div className='contact-avatar' style={{
                backgroundImage:`url{${contacts.avatarURL}}`}}></div>
              <div className='contact-details'>
                <p>{contacts.name}</p>
                <p>{contacts.email}</p>
                </div>
                <button onClick={()=>{
                    props.onDeleteContact(contacts)
                  }}className='contact-remove'>Remove</button>
              }}
          </li>
        )
      })}
    </ol>
    </div>
  )

}

export {ListContacts};
