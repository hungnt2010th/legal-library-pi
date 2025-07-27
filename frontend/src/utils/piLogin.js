
export const loginWithPi = async () => {
  try {
    const scopes = ["username", "payments"];
    const auth = await window.Pi.authenticate(scopes, (payment) => {
      console.log("Incomplete payment", payment);
    });
    return auth.user;
  } catch (error) {
    console.error("Pi login error:", error);
  }
};
