import React from "react";
import { AiOutlinePoweroff } from "react-icons/ai";
import { Container, User, Navigation, Navigatable } from "./styles";

const NavgationMenu: React.FC = () => {
  const [selected, setSelected] = React.useState(0);
  const navlist = React.useMemo(() => {
    return [
      { id: 0, name: "Home" },
      { id: 1, name: "Conversas" },
      { id: 2, name: "Contatos" },
      { id: 3, name: "Notificações" },
      { id: 4, name: "Calendário" },
      { id: 5, name: "Configurações" },
    ];
  }, []);

  const handleSelect = React.useCallback(
    (id: number) => {
      const selected = navlist.find((item) => item.id === id);
      selected && setSelected(selected.id);
    },
    [navlist]
  );

  return (
    <Container>
      <User>
        <img
          src="https://image.freepik.com/fotos-gratis/bracos-africanos-novos-excited-felizes-do-cruzamento-do-homem-na-caixa-e-vista-da-camera_1262-12351.jpg"
          alt="profile"
        />
        <span>Thiago Silva</span>
      </User>
      <Navigation>
        <ul>
          {navlist.map((item) => (
            <Navigatable
              key={item.id}
              onClick={() => handleSelect(item.id)}
              selected={item.id === selected}
            >
              <AiOutlinePoweroff /> {item.name}
            </Navigatable>
          ))}
        </ul>

        <ul>
          <Navigatable>
            <AiOutlinePoweroff />
            Logout
          </Navigatable>
        </ul>
      </Navigation>
    </Container>
  );
};

export default NavgationMenu;
