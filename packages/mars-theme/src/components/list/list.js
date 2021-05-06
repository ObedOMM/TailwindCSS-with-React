import React from "react";
import { connect, styled, decode } from "frontity";
import Item from "./list-item";
import Pagination from "./pagination";
import image from "../../images/profile.jpg";


import tw from "tailwind.macro";

const Button = styled("button")`
  ${tw`font-mono text-lg bg-blue-500 rounded`};
`;

const Ob1 = styled("div")`
  ${tw` md:flex bg-gray-100 rounded-xl p-8 md:p-0`};
`;

const Ob2 = styled("div")`
  ${tw`pt-6 md:p-8 text-center md:text-left`};
`;

const Photo1 = styled("img")`
  ${tw`w-32 h-auto md:w-48 md:h-auto md:rounded-full rounded  mx-auto`};
`;

const Ob3 = styled("div")`
  ${tw`text-cyan-600`};
`;

const Ob4 = styled("div")`
  ${tw`text-gray-500`};
`;

const Blockquote = styled("blockquote")`
  ${tw``};
`;

const P1 = styled("p")`
  ${tw`text-lg font-semibold`};
`;


const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  return (
    <>


      <Container>


      <Ob1>
        <Photo1 src="static/images/profile.jpg" alt="" width="384" height="512" />
        <Ob2>
          <Blockquote>
            <P1>
              “Logiciel de gestion des Cabinets d'avocats lorem 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae libero sapiente suscipit harum ratione itaque et fugiat excepturi rerum voluptas explicabo placeat magnam, nam velit dicta, atque voluptatibus similique modi.
              .” 
            </P1>
          </Blockquote>
          <figcaption className="font-medium">
            <Ob3>
            Obed Mulumba
            </Ob3>
            <Ob4>
              Développeur Web, Kinshasa Digital
            </Ob4>
            {/* <Button>Bienvenue</Button> */}
          </figcaption>
        </Ob2>
      </Ob1>



        {/* If the list is a taxonomy, we render a title. */}
        {data.isTaxonomy && (
          <Header>
            {data.taxonomy}:{" "}
            <b>{decode(state.source[data.taxonomy][data.id].name)}</b>
          </Header>
        )}

        {/* If the list is for a specific author, we render a title. */}
        {data.isAuthor && (
          <Header>
            Author: <b>{decode(state.source.author[data.id].name)}</b>
          </Header>
        )}

        {/* Iterate over the items of the list. */}
        {data.items.map(({ type, id }) => {
          const item = state.source[type][id];
          // Render one Item component for each one.
          return <Item key={item.id} item={item} />;
        })}
        <Pagination />
      </Container>
    </>
  );
};

export default connect(List);

const Container = styled.section`
  width: 1024px;
  margin: 0;
  padding: 24px;
  list-style: none;
`;

const Header = styled.h3`
  font-weight: 300;
  text-transform: capitalize;
  color: rgba(12, 17, 43, 0.9);
`;

