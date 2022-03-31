import retrieveDataFromCSV from "../../utils/retrieveDataFromCSV.js";
import { useForm } from "react-hook-form";

export default function Form(options) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (csv) => retrieveDataFromCSV(csv);

  return (
    <form className="csvForm" onSubmit={handleSubmit(onSubmit)}>
      <input type="file" id="csvFile" accept=".csv" {...register("example")} />

      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" />

      {/* <UploadButton />
          <SendButton /> */}
    </form>
  );
}
