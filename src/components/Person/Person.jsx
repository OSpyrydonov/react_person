const MALE = 'm';
const FEMALE = 'f';

const PARTNER_ROLE = {
  [MALE]: 'husband',
  [FEMALE]: 'wife',
}

export const Person = ({ person }) => {
  const { name, age, sex, isMarried, partnerName } = person;
  const partnerRole = sex === MALE
   ? PARTNER_ROLE[FEMALE]
   : PARTNER_ROLE[MALE];

  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${name}`}</h2>
      {age && <p className="Person__age">{`I am ${age}`}</p>}
      {isMarried ? (
        <p className="Person__partner">
          {`${partnerName} is my ${partnerRole}`}
        </p>
      ) : (
        <p className="Person__partner">I am not married</p>
      )}
    </section>
  );
};
