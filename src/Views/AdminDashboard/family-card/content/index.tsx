import { Edit, PlusCircle, Trash } from "react-feather";
import Modal from "../../../Components/Modal";
import { useContext, useState } from "react";
import { ViewModelContext } from "../../../ViewModelContext";
import useSubject from "../../../hooks/useSubject";
import { Family } from "../../../../Models/FamilyLogic";

function Content() {
  const { family } = useContext(ViewModelContext);
  const [name, setName] = useState("");
  const a = useSubject<Record<Family["id"], Family>>(
    family.getFamiliesSubject(),
    {},
  );
  console.log(a);

  return (
    <div className="family-card__content">
      <div className="family-card__content__left">
        <div>
          <input placeholder="Recherche..." />
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Capacité</th>
                <th>Types</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Object.values(a).map((family) => (
                <tr key={family.id}>
                  <td>{family.name}</td>
                  <td>42</td>
                  <td>Chatons</td>
                  <td>
                    <Edit />
                    <Trash />
                  </td>
                </tr>
              ))}
              <tr>
                <td>Celine</td>
                <td>2</td>
                <td>Chatons</td>
                <td>
                  <Edit />
                  <Trash />
                </td>
              </tr>
              <tr>
                <td>Flo</td>
                <td>2</td>
                <td>Chatons</td>
                <td>
                  <Edit />
                  <Trash />
                </td>
              </tr>
              <tr>
                <td>Raph</td>
                <td>2</td>
                <td>Chatons</td>
                <td>
                  <Edit />
                  <Trash />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="spacer--vertical"></div>
      <div className="actions">
        <Modal>
          <input
            placeholder="Nom"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
          />
          <button
            onClick={() => {
              family.CreateFamily({ name });
            }}
          >
            Créer
          </button>
        </Modal>
        <div className="action">
          <p>Ajouter une famille</p>
          <PlusCircle />
        </div>
      </div>
    </div>
  );
}

export default Content;
