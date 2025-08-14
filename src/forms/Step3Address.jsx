import { useForm } from "react-hook-form";
export default function Step3Address({ onNext, data, setData }) {
  const { register, handleSubmit } = useForm({ defaultValues: data });

  const onSubmit = values => {
    setData({ ...data, ...values });
    onNext();
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Permanent Address" {...register("permAddress", { required: true })} />
      <input type="text" placeholder="City" {...register("permCity", { required: true })} />
      <input type="text" placeholder="State" {...register("permState", { required: true })} />
      <input type="text" placeholder="Country" {...register("permCountry", { required: true })} />
      <input type="text" placeholder="Pin" {...register("permPin", { required: true })} />
      <input type="text" placeholder="Present Address" {...register("presAddress", { required: true })} />
      <input type="text" placeholder="City" {...register("presCity", { required: true })} />
      <input type="text" placeholder="State" {...register("presState", { required: true })} />
      <input type="text" placeholder="Country" {...register("presCountry", { required: true })} />
      <input type="text" placeholder="Pin" {...register("presPin", { required: true })} />
      <button type="submit" className="btn-primary">Next</button>
    </form>
  );
}
