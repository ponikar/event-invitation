import { Mail, Linkedin, Twitter } from "react-feather";

const IconProps = {
  className: "text-grey cursor-pointer mx-2",
  size: 16,
};

export const Member = ({
  last,
  name,
  role,
  profile_url,
  email,
  linked_url,
  twitter_url
}) => {
  return (
    <div
      className={`w-full flex flex-col items-center text-center p-2 ${
        last && "lg:col-span-1 col-span-2"
      }`}
    >
      <img
        src={profile_url}
        alt="member"
        className="w-28 h-28 border border-gr object-contain rounded-full my-2"
      />
      <h2 className="text-sm" style={{ fontSize: "11px" }}>
        {name}
      </h2>
      <p className="mx-2 text-sm text-primary" style={{ fontSize: "10px" }}>
        {role}
      </p>
      <div className="flex text-grey text-sm mt-2 justify-center w-full items-center">
        <a href={`mailto:${email}`} rel="noreferrer" target="_blank">
          <Mail {...IconProps} />
        </a>

        {linked_url && (
          <a href={linked_url} rel="noreferrer" target="_blank">
            <Linkedin {...IconProps} />
          </a>
        )}

        {twitter_url && (
          <a href={twitter_url} rel="noreferrer" target="_blank">
            <Twitter {...IconProps} />
          </a>
        )}
      </div>
    </div>
  );
};
