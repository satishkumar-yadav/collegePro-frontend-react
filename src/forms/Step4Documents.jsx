import { useState } from "react";
import { useForm } from "react-hook-form";
import { uploadDocs } from "../api";
import { validateFile } from "../utils/validateFile";

export default function Step4Documents({ onSubmit, data, setData }) {
  const { register, handleSubmit, setError } = useForm();
  const [previewAadhar, setPreviewAadhar] = useState(null);

  const handleFileChange = e => {
    const err = validateFile(e.target.files[0]);
    if (err) setError(e.target.name, { type: "manual", message: err });
    else {
      if (e.target.name === "aadharFront") setPreviewAadhar(URL.createObjectURL(e.target.files[0]));
    }
  };

  const onFormSubmit = async (values) => {
    // File upload logic
    const formData = new FormData();
    Object.keys(values).forEach(k => formData.append(k, values[k][0]));
    await uploadDocs(formData);
    setData({ ...data, ...values });
    onSubmit();
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onFormSubmit)}>
      <div>
        <label>Aadhar Front:</label>
        <input type="file" {...register("aadharFront", { required: true })} onChange={handleFileChange} accept="image/*,application/pdf" />
        {previewAadhar && <img src={previewAadhar} alt="Aadhar preview" className="h-16 mt-2" />}
      </div>
      <div>
        <label>Aadhar Back:</label>
        <input type="file" {...register("aadharBack", { required: true })} onChange={handleFileChange} accept="image/*,application/pdf" />
      </div>
      <div>
        <label>Last Exam Marksheet:</label>
        <input type="file" {...register("marksheet", { required: true })} onChange={handleFileChange} accept="image/*,application/pdf" />
      </div>
      <button type="submit" className="btn-primary">Submit</button>
    </form>
  );
}
