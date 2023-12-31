import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "../../Css/Game/Playgame.css";
import { images } from "../../../Images";
import { BsFillPlayFill } from "react-icons/bs";
import { useGameFetchQuery } from "../../../slices/gameSlice";
import { Link } from 'react-router-dom';
const Playgame = () => {
  const { data } = useGameFetchQuery();
  const gameinfo = data?.data?.data || [];
  return (
    <div>
      <div className="exploringgamesectionbg">
        <Container>
          <Row>
            <Col md={4}></Col>
            <Col md={4}>
              <p className="Exploringheading">Choose Your Game</p>
              <p className="selectgamemodedesc">
                Dive into the Action with Your Favorite Sport
              </p>
            </Col>
            <Col md={4} className="alignwalletbutright">
              {/* <Button className='connectwalletbutton'><span className='walleticon'><BiWalletAlt/></span>Connect Wallet</Button> */}
            </Col>
          </Row>
          <Row className="marg-top-100-gamemodes">
            <Col md={3}>
              <div className="maketennisrow">
                <Image
                  className="imgsize100atmbl"
                  src={images.gameone}
                  width="90%"
                ></Image>
                <p className="gamename mt-4">Tennis</p>
                <p className="statusgame">Coming Soon</p>
                <Button className="gamestatusbutton mt-5">
                  <span className="gameplayicn">
                    <BsFillPlayFill />
                  </span>
                  How to play?
                </Button>
              </div>
            </Col>
            <Col md={3}>
              <div className="maketennisrow">
                <Image
                  className="imgsize100atmbl"
                  src={images.gamefour}
                  width="90%"
                />
                <p className="gamename mt-4">Football</p>
                <p className="statusgame">Live Now</p>
                {gameinfo?.length > 0 &&
                  gameinfo.map((item) => (
                    <Link
                    key={item._id}
                    to={`/gamemode/${item._id}`}
                      className="Freetoplaybutton mt-5"
                    >
                      <span className="gameplayicngreen">
                        <BsFillPlayFill />
                      </span>
                      Play
                    </Link>
                  ))}
              </div>
            </Col>
            <Col md={3}>
              <div className="maketennisrow">
                <Image
                  className="imgsize100atmbl"
                  src={images.gamethree}
                  width="90%"
                ></Image>
                <p className="gamename mt-4">Basketball</p>
                <p className="statusgame">Coming Soon</p>
                <Button className="gamestatusbutton mt-5">
                  <span className="gameplayicn">
                    <BsFillPlayFill />
                  </span>
                  How to play?
                </Button>
              </div>
            </Col>
            <Col md={3}>
              <div className="maketennisrow">
                <Image
                  className="imgsize100atmbl"
                  src={images.gametwo}
                  width="90%"
                ></Image>
                <p className="gamename mt-4">Volleyball</p>
                <p className="statusgame">Coming Soon</p>
                <Button className="gamestatusbutton mt-5">
                  <span className="gameplayicn">
                    <BsFillPlayFill />
                  </span>
                  How to play?
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Playgame;
