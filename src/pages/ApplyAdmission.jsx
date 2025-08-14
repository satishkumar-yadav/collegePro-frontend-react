import { useSnackbar } from "notistack";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerStudentTemp } from "../api";
import Step1Profile from "../forms/Step1Profile";
import Step2PersonalInfo from "../forms/Step2PersonalInfo";
import Step3Address from "../forms/Step3Address";
import Step4Documents from "../forms/Step4Documents";

export default function ApplyAdmission() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({});
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const nextStep = () => setStep(step + 1);

  const handleSubmit = async () => {
    try {
      await registerStudentTemp(form);
      enqueueSnackbar("Application submitted. Waiting approval!", { variant: "success" });
      navigate("/"); // return to home
    } catch (err) {
        console.log(err);
      enqueueSnackbar("Error submitting application", { variant: "error" });
    }
  };

  return (
    <div className="max-w-xl mx-auto py-8">
      {step === 1 && <Step1Profile onNext={nextStep} data={form} setData={setForm} />}
      {step === 2 && <Step2PersonalInfo onNext={nextStep} data={form} setData={setForm} />}
      {step === 3 && <Step3Address onNext={nextStep} data={form} setData={setForm} />}
      {step === 4 && <Step4Documents onSubmit={handleSubmit} data={form} setData={setForm} />}
    </div>
  );
}
