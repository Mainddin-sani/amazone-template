import React from "react";
import { useForm } from "react-hook-form";

const Shipment = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} />
      {errors.name && <span>This name field is required</span>}
      <input {...register("email", { required: true })} />
      {errors.email && <span>This email field is required</span>}
      <input {...register("phone", { required: true })} />
      {errors.phone && <span>This phone field is required</span>}

      <input type="submit" />
    </form>
  );
};

export default Shipment;
