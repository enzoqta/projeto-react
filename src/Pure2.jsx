function Cup({ guestNumber }) {
  return <h2>Tea cup for guest #{guestNumber}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup guestNumber={1} />
      <Cup guestNumber={2} />
      <Cup guestNumber={3} />
    </>
  );
}
