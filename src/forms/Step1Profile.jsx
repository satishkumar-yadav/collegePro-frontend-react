import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { checkDuplicate, getCourses } from "../api";

export default function Step1Profile({ onNext, data, setData }) {
  const { register, handleSubmit, watch, setError } = useForm({ defaultValues: data });
  const [courses, setCourses] = useState([]);
  const [branches, setBranches] = useState([]);

  const tempRoll = "TEMP" + Date.now(); // simple temp id, backend can overwrite with proper sequence if needed 
  
  useEffect(() => { getCourses().then(res => setCourses(res.data)); }, []);
  useEffect(() => {
    setBranches(watch("course") ? courses.find(c => c.name === watch("course"))?.branches || [] : []);
  }, [watch("course"), courses]);

  const onSubmit = async (values) => {
    values.tempRoll = tempRoll;
    values.admissionDate = new Date().toISOString().split("T")[0];  //

    // Check duplicate email/aadhar
    const emailDup = await checkDuplicate("email", values.email);
    if (emailDup.data.exists) return setError("email", { type: "manual", message: "Email already registered" });
    const aadharDup = await checkDuplicate("aadhar", values.aadhar);
    if (aadharDup.data.exists) return setError("aadhar", { type: "manual", message: "Aadhar already registered" });
    setData({ ...data, ...values });
    onNext();
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <input type="file" {...register("profilePic")} accept="image/*" />
      <input type="text" placeholder="Full Name" {...register("name", { required: true })} />
      <input type="tel" placeholder="Contact" {...register("contact", { required: true })} />
      <input type="email" placeholder="Email" {...register("email", { required: true })} />
      <select {...register("course", { required: true })}>
        <option value="">Select Course</option>
        {courses.map(c => <option key={c.id}>{c.name}</option>)}
      </select>
      <select {...register("branch", { required: true, disabled: !watch("course") })}>
        <option value="">Select Branch</option>
        {branches.map(b => <option key={b}>{b}</option>)}
      </select>
      <input type="date" placeholder="DoB" {...register("dob", { required: true })} />
      <input type="text" placeholder="Aadhar" {...register("aadhar", { required: true })} />
      <input type="text" placeholder="Qualification" {...register("qualification", { required: true })} />
      <input type="number" placeholder="Marks (%)" {...register("marks", { required: true, min: 0, max: 100 })} />
      <input type="text" value={tempRoll} readOnly {...register("tempRoll")} />  {/*  */}
      <input type="date" {...register("admissionDate")} />

      <button type="submit" className="btn-primary">Next</button>
    </form>
  );
}
