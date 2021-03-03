import React, { useState } from "react";
import Header from "../../components/Header/Header.jsx";
import SideNavbar from "../../components/SideNavbar/SideNavbar.jsx";
import "./dashBoard.scss";
const DashBoard = () => {
  const [isDrawerMin, setIsDrawerMin] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState("Dashboard");
  const setMenu = (value) => {
    setSelectedMenu(value);
  };

  const setListSize = () => {
    setIsDrawerMin(!isDrawerMin);
  };
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <Header setListSize={setListSize} />
      </div>
      <div className="dashboard-body">
        <div className="dashboard-sideNav">
          <SideNavbar
            isDrawerMin={isDrawerMin}
            selectedMenu={selectedMenu}
            setSelectedMenu={setMenu}
          />
        </div>
        <div className="dashboard-details">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur
          iste facilis atque, laborum nisi commodi velit perspiciatis adipisci
          sint, ducimus, recusandae aperiam minima cum rerum optio esse nam
          ipsum veritatis odio cumque officiis laudantium quia voluptate dolore?
          Ea dolor a, soluta incidunt quos repudiandae ratione facilis suscipit
          sapiente accusantium amet, repellat error sunt impedit veritatis ex
          porro minus excepturi aut quidem quod eaque? Dolor, ad quia fugiat
          laborum exercitationem magni sit aspernatur, minus obcaecati nesciunt
          rem sed consequatur provident eligendi voluptatem ea quos. Perferendis
          id ipsam ratione reprehenderit velit atque omnis voluptas,
          consequuntur cum quibusdam modi minus saepe eligendi. Labore sapiente
          obcaecati architecto fuga velit accusantium sint recusandae voluptatum
          libero! Voluptas, tempore nostrum! Ipsa, fugiat? Voluptas nisi dolor
          sit quibusdam, dolorum alias, distinctio dolore rerum aliquam impedit
          consequuntur unde laboriosam placeat fugiat cum? Quibusdam quam nemo
          cum explicabo ea! Quo quis, quaerat voluptates nesciunt voluptatum
          recusandae, modi iste repellendus deserunt, consequatur sapiente
          distinctio. Incidunt, consequatur! In facilis alias quam dolores sint
          repudiandae unde placeat iure inventore fugiat! Nostrum obcaecati
          molestiae tempora? Veritatis omnis voluptate quis, reiciendis ducimus
          sit repellendus et? Suscipit sed magnam animi? Doloremque iste
          repellat perferendis ex voluptas. Aspernatur porro unde numquam autem,
          quod maiores asperiores sunt et officiis consequuntur. Numquam qui
          nisi et perspiciatis reiciendis nulla ullam inventore harum, quo minus
          consequatur facilis velit, quas quasi dolores sint quia. Quis libero
          quasi excepturi fugiat eius quidem qui dolor, voluptatibus, possimus
          laudantium, totam recusandae dignissimos aut! Fuga, qui. Iusto
          voluptatibus aperiam iure? Voluptatem minus minima, blanditiis cumque
          expedita reprehenderit neque tenetur nam consequatur praesentium sequi
          impedit, sapiente non fugit ea iusto, laboriosam nulla officia
          temporibus in. Quibusdam assumenda numquam eveniet harum voluptatum
          nemo provident non est tenetur, temporibus dicta sequi perspiciatis
          ut. Ut cupiditate quo reprehenderit eum rerum iste, maxime architecto
          temporibus? Iste ullam illum nulla nemo, rem, officiis maxime voluptas
          quam tenetur ipsa impedit aliquid fuga reprehenderit sunt minus saepe,
          placeat ducimus aliquam suscipit odio enim quae. Unde non ipsam
          necessitatibus debitis ducimus asperiores beatae, excepturi sed dicta
          cumque. Suscipit, rem soluta quia, sint accusamus earum dolor
          laboriosam, est adipisci nulla recusandae modi ab dolorum ratione et.
          Dolorem, doloremque. Illum sunt, esse veniam beatae laborum eum
          molestias, nulla magnam suscipit nobis iste, velit sapiente impedit
          veritatis voluptates et minima tempora quam nam odio necessitatibus
          sed fugiat optio reiciendis! Consectetur officia expedita distinctio,
          et, rem consequuntur explicabo ipsam reprehenderit eos natus sint
          quaerat amet, iure dolorum iusto numquam iste voluptatem fugiat!
          Reprehenderit sed magnam saepe molestias sit minima ducimus, quae
          quasi sequi assumenda ab possimus eius autem quos dolorum debitis.
          Itaque modi aut quaerat numquam earum sequi perspiciatis provident
          dolorem nihil, ea laboriosam facere odit velit ut deleniti tenetur
          alias odio? Tenetur veniam ipsa dicta, adipisci quae harum ut
          excepturi! Modi provident atque quidem necessitatibus ex iusto,
          pariatur magni doloremque et cum in, commodi nihil! Illo itaque
          accusamus omnis ipsa deleniti eius veritatis consequatur, animi quos
          quae, dolor rem quod, odit amet ad neque delectus? Unde ex nesciunt
          harum id sint aliquam amet molestiae ullam laborum, animi corrupti.
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
