import {usuarios} from './Usuarios500';

const UsuariosMap = () => {
  

  

  return (
    
   <div>
    {usuarios.map((usuario) => (
        <tr key={usuario.id}>
          <td>{usuario.id}</td>
          <td>{usuario.username}</td>
          <td>{usuario.email}</td>
          <td>{usuario.nombre}</td>
          <td>{usuario.apellidoPaterno}</td>
          <td>{usuario.apellidoMaterno}</td>
        </tr>
      ))}
   </div>
  );
};

export default UsuariosMap;
