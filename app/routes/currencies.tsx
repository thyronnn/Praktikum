import Buttonn from "~/components/button";
import Button from "~/components/button";

export default function Currencies() {
  return (
    <div>
      <div>
        <h1 className="underline text-[120px] flex justify-center underline-offset-8 font-semibold">
          Currencies
        </h1>
        <div className="flex items-center justify-center">
          <div>
            <br />
            <br />
            <div className="flex justify-center flex-col gap-8">
              <Buttonn to="/europe">EUROPE</Buttonn>
              <Buttonn to="/americas">AMERICAS</Buttonn>
              <Buttonn to="/asia">ASIA</Buttonn>
              <Buttonn to="/Oceania">OCEANIA</Buttonn>
              <Buttonn to="/africa">AFRICA</Buttonn>
              <Buttonn to="/mideast">MID.EAST</Buttonn>

              <h1 className="values flex w-fcenterull items-center justify-center text-[30px] "></h1>
            </div>
            <div>
              {" "}
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
