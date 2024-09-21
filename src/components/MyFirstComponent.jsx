import React from 'react'

const MyFirstComponent = () => {

  const name ="Wilson Pedraza";
  const github_profile = "BlackSpirit1201";
  
  const student = {
    name : "Diana",
    last_name: "Arevalo",
    mobile: "3000000",
    linkedin_prof : "https://co.linkedin.com/"
  }
  return (
    <>
    <div>MyFirtComponent</div>
    <div className="container bg-info-subtle ">
    <h1>Temas de React</h1>
    <ul>
      <li>Componentes</li>
      <li>Eventos</li>
      <li>Estados Hooks</li>
      <li>Props</li>
    </ul>
    </div>
    <div className="container bg-warning-subtle py-2">
      <h1>Datos del Docente</h1>
      <p>Nombre:  <strong> {student.name} </strong></p>
      <p>Apeliido:  <strong> {student.last_name} </strong></p>
      <p>Celular:  <strong> {student.mobile} </strong></p>
      <p>LinkedIn:  <a target="_blank" href= {student.linkedin_prof} > {student.linkedin_prof} </a></p>
    </div>

    <div>
      <h1>Objeto Completo</h1>
      <pre>{JSON.stringify(student)}</pre>                 
    </div>
  </>
    
  )
}

export default MyFirstComponent
