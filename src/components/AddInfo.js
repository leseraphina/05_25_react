import { BiTrash } from "react-icons/bi";
export default function AddInfo({appoint,onDelete}){
  return (
    <li>
      <dl>
        <dt>{appoint.petName}</dt>
        <dd><dfn>{appoint.ownerName}</dfn></dd>
        <dd className="desc">{appoint.aptNotes}</dd>
        <dd className="date">{appoint.aptDate}</dd>
      </dl>
      <p>
        <button 
          type="button"
          onClick={() =>onDelete(appoint.id)}>
        <BiTrash />
        </button></p>
    </li>
  );
}
// 40 - 50