import { observer } from "mobx-react";
import React from "react";
import HeaderComponent from "../../shared/components/Parts/Header/Header.component";
import { useAccessFormStore } from "./store/form";

const FormComponent = () => {
  const form = useAccessFormStore();
  const setId = (event: React.ChangeEvent<HTMLInputElement>) => form.setId(parseInt(event.target.value));
  const setName = (event: React.ChangeEvent<HTMLInputElement>) => form.setName(event.target.value);
  
  return (
    <>
      <HeaderComponent />
      <div className="layout">
        <input placeholder="user id" type="number" value={form.id} onChange={setId} />
        <input placeholder="user name" value={form.name} onChange={setName} />
      </div>
    </>
  );
}

export default observer(FormComponent);
