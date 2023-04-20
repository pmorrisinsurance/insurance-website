import EmailStyles from "./EmailStyles";

const EmailClient = (data) => {
  const {
    fName,
    mName,
    lName,
    email,
    provider,
    message,
    addressStreet1,
    addressStreet2,
    addressCity,
    addressState,
    addressPostal,
    dobMonth,
    dobDay,
    dobYear,
    policy,
  } = data.emailObj;

  return (
    <body style={EmailStyles.containerStyles}>
      <header>
        <h1 style={EmailStyles.titleStyles}>Perry Morris</h1>
      </header>
      <main style={EmailStyles.contentStyles}>
        <h1 style={EmailStyles.headerStyles}>Thanks For Choosing Me</h1>
        <p style={EmailStyles.textStyles}>
          Hello {fName} we just received your message! I wanted to thank you for
          allowing me to serve you. Here is the information that you sent me:
        </p>
        <ul style={EmailStyles.infoStyles}>
          <li>
            Name:{" "}
            <span style={EmailStyles.infoItemStyles}>{`${fName} ${
              mName.trim() !== "" ? mName + " " : ""
            }${lName}`}</span>
          </li>
          <li>
            Email: <span style={EmailStyles.infoItemStyles}>{email}</span>
          </li>
          <li>
            Address:{" "}
            <span style={EmailStyles.infoItemStyles}>{`${addressStreet1} ${
              addressStreet2.trim() !== "" ? addressStreet2 + " " : ""
            }${addressCity}, ${addressState}, ${addressPostal}`}</span>
          </li>
          <li>
            Date of Birth:{" "}
            <span
              style={EmailStyles.infoItemStyles}
            >{`${dobMonth}/${dobDay}/${dobYear}`}</span>
          </li>
          <li>
            Provider: <span style={EmailStyles.infoItemStyles}>{provider}</span>
          </li>
          <li>
            Policy: <span style={EmailStyles.infoItemStyles}>{policy}</span>
          </li>
          <li>
            Message: <span style={EmailStyles.infoItemStyles}>{message}</span>
          </li>
        </ul>
        <p style={EmailStyles.textStyles}>
          We will be in touch with you within&nbsp;24 hours.
        </p>
      </main>
      <hr style={EmailStyles.hrStyles} />
      <footer>
        <ul style={EmailStyles.contactStyles}>
          <li>1480 East 3100 North</li>
          <li>Logan, UT 84341</li>
          <li>perry@perrymorrisinsurance.com</li>
        </ul>
      </footer>
    </body>
  );
};

export default EmailClient;
