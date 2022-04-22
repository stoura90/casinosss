import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import NavBar from '../../../components/layout/Navbar'
import CountdownTimer from '../StarTrek/CountdownTimer/CountdownTimer'
import './index.css'
import Fruit from './Games/Fruit'
import FairyLand from './Games/FairyLand'
import Resident from './Games/Resident'
import Keks from './Games/Keks'
import CrazyMonkey from './Games/CrazyMonkey'
import LuckyHaunter from './Games/LuckyHaunter'
import Gnome from './Games/Gnome'
import RockClimber from './Games/RockClimber'
import Garage from './Games/Garage'
import RaccoonTales from './Games/RaccoonTales'
import NUKEWORLD from './Games/Nuke'
import Roulette from './Games/Roulette'
import StarGuardians from './Games/StarGuardians'
import Treeoflight from './Games/Treeoflight'
import Hamster from './Games/SavetheHamster'
import ForestDreams from './Games/ForestDreams'
import evo from './uploads/games/1920x820_EE_promo_short.mp4'
import evoo from './uploads/games/1920x820_EE_promo_short.webm'
import AnimalQuest from './Games/AnimalQuest'
import MagicWheel from './Games/MagicWheel'
import ChristmasParty from './Games/ChristmasParty'
import ETRaces from './Games/ETRaces'
import SimpleBar from 'simplebar-react'
function Casino() {
  return (
    <Container className="root-page">
      <Row>
        <Col xl={3} className="d-none d-xl-block">
          <NavBar />
        </Col>
        <Col xl={9}>
          <div className="startrek__title1">
            <span>До запуска осталось</span>
          </div>
          <div className="startrek__title">
            <CountdownTimer countdownTimestampMs={1659983662000} />
          </div>
          <h1 className="startrek__title1">ИГРЫ</h1>
          <SimpleBar style={{ height: '44%', width: '100%' }}>
            <video autoPlay muted loop>
              <source src={evoo} autoFocus />
              <source src={evo} autoFocus />
            </video>
            <Fruit />
            <FairyLand />
            <Resident />
            <Keks />
            <CrazyMonkey />
            <LuckyHaunter />
            <Gnome />
            <RockClimber />
            <Garage />
            <RaccoonTales />
            <NUKEWORLD />
            <Roulette />
            <StarGuardians />
            <Treeoflight />
            <Hamster />
            <ForestDreams />
            <AnimalQuest />
            <MagicWheel />
            <ChristmasParty />
            <ETRaces />
          </SimpleBar>
        </Col>
      </Row>
    </Container>
  )
}
export default Casino
