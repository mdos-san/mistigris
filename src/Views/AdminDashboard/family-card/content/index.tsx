import { Edit, PlusCircle, Trash } from "react-feather";
import Modal from "../../../Components/Modal";

function Content() {
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
              <tr>
                <td>Pauline</td>
                <td>2</td>
                <td>Chatons</td>
                <td>
                  <Edit />
                  <Trash />
                </td>
              </tr>
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
          <input placeholder="Nom" />
          <button>Créer</button>
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
