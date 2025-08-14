import { useForm } from "react-hook-form";
export default function Step2PersonalInfo({ onNext, data, setData }) {
  const { register, handleSubmit } = useForm({ defaultValues: data });

  const onSubmit = values => {
    setData({ ...data, ...values });
    onNext();
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Father's Name" {...register("fatherName", { required: true })} />
      <input type="text" placeholder="Father's Occupation" {...register("fatherOccupation")} />
      <input type="tel" placeholder="Father's Mobile" {...register("fatherMobile", { required: true })} />
      <input type="text" placeholder="Mother's Name" {...register("motherName", { required: true })} />
      <input type="text" placeholder="Mother's Occupation" {...register("motherOccupation")} />
      <input type="text" placeholder="Category" {...register("category", { required: true })} />
      <input type="text" placeholder="Religion" {...register("religion", { required: true })} />
      <button type="submit" className="btn-primary">Next</button>
    </form>
  );
}
