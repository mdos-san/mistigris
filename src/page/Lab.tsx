import { useState } from "react";
import DashboardElement from "../components/DashboardElement";

enum Selected {
  none,
  famillies,
  cats,
  admin,
  events
}

function Lab() {
  const [selected, setSelected] = useState(Selected.none);

  return <div className="dashboard">
    <DashboardElement title={"Famille"} type={"square"} position={"left"} isSelected={selected === Selected.famillies} onClick={() => {
      const newS = selected !== Selected.famillies ? Selected.famillies : Selected.none; 
      setSelected(newS)
    }} />
    <DashboardElement title={"Chats"} type={"square"} position={"middle"} isSelected={selected === Selected.cats} onClick={() => {
      const newS = selected !== Selected.cats ? Selected.cats : Selected.none; 
      setSelected(newS)
    }} />
    <DashboardElement title={"Administration"} type={"square"} position={"right"} isSelected={selected === Selected.admin} onClick={() => {
      const newS = selected !== Selected.admin ? Selected.admin : Selected.none; 
      setSelected(newS)
    }} />
    <DashboardElement title={"Events"} type={"row"} position={"bottom"} isSelected={selected === Selected.events} onClick={() => {
      const newS = selected !== Selected.events ? Selected.events : Selected.none; 
      setSelected(newS)
    }} />
  </div>
}

export default Lab;
