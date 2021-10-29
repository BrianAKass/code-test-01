export interface Props {
  LoggedIn: boolean;
}

export default function Logo({ LoggedIn }: Props) {
  return (
    <div
      className={
        LoggedIn
          ? "logoContainer formsContainer"
          : "logoContainerLogin formsContainer"
      }
    >
      <div
        className={
          LoggedIn ? "logo formsContainer" : "logoLogin formsContainer"
        }
      >
        $
      </div>
      <h2 className={LoggedIn ? "logoName" : "logoNameLogin"}>PriceMe</h2>
    </div>
  );
}
