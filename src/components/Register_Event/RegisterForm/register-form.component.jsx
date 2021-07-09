import { InputBox } from "../Input/input.compnent";
import { Loading } from "../../Common/Loading/loading.component";

export const RegisterForm = ({
  handleSubmit,
  handleChange,
  viewerRegistration,
  helpers: {isLoading, message, success} ,
}) => {
  return (
    <section className="bg-white border z-10 shadow border-pc w-full md:w-9/12 lg:w-2/5 xl:w-4/12 p-4 rounded-pm mx-auto">
      { message && <p className={`text-center ${success ? "text-green": "text-red"} text-sm`}> {message} </p> }
      <form onSubmit={handleSubmit}>
        <InputBox
          label="Your Name"
          name="userName"
          placeholder="John Doe"
          value={viewerRegistration.userName}
          onChange={handleChange}
        />
        <InputBox
          type="email"
          label="Email Id"
          name="EmailId"
          placeholder="emailaddress@gmail.com"
          value={viewerRegistration.EmailId}
          onChange={handleChange}
          disabled={true}
        />
        <InputBox
          label="Semester"
          name="Semester"
          type="number"
          placeholder="Current Sem"
          value={viewerRegistration.Semester}
          onChange={handleChange}
        />
        <InputBox
          label="Department"
          name="department"
          placeholder="Department"
          value={viewerRegistration.department}
          onChange={handleChange}
        />
        <InputBox
          label="College Name"
          name="collegeName"
          placeholder="College Name"
          value={viewerRegistration.collegeName}
          onChange={handleChange}
        />
        <InputBox
          label="How did you hear about NXT.Tech ?"
          name="desc"
          placeholder="i.e Linkedin, Whatsapp Group, Friend Suggested"
          value={viewerRegistration.desc}
          onChange={handleChange}
        />
        {!isLoading ? (
          <button
            type="submit"
            className="w-full py-2 px-4 text-sm bg-primary text-white rounded-pm focus:shadow-outline"
          >
            Submit
          </button>
        ) : (
          <Loading />
        )}
      </form>
    </section>
  );
};
