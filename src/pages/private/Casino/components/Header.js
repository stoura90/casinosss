import React, { useCallback, useContext, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
//import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import CasinoIcon from '@material-ui/icons/Casino'
import Container from '@material-ui/core/Container'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import NumberFormat from 'react-number-format'
import configureStore, { history } from '../../../../config/store'
import { Link } from 'react-router-dom'
import routes from '../../../../constants/routes.constants'
import styles from '../../Star/Table/Table.module.scss'
import closeIcon from '../../../../scss/media/close.ac2aaa1a.svg'
import { formatter } from '../../../../utils'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../../../actions/finance.actions'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  balance: {
    paddingRight: 20,
  },
  toolbar: {
    paddingRight: 0,
    paddingLeft: 0,
  },
}))

function Spin(props) {
  const classes = useStyles()
  const datos = configureStore(history)
  const [openModalLogin, setOpenModalLogin] = React.useState(false)

  const handleLogin = () => {
    setOpenModalLogin(true)
  }

  const handleLoginClose = () => {
    setOpenModalLogin(false)
  }

  const handleLogout = () => {
    datos.updateAuth({ isLogged: false, username: '' })
  }

  const handleLogoClick = () => {
    datos.restoreData({ isLogged: false, username: '', balance: 100 })
  }
  const dispatch = useDispatch()
  const [isOperationsHistoryModalVisible, setIsOperationsHistoryModalVisible] = useState(false)
  const userInfo = useSelector((state) => state.app.user)

  const handleVisibleTransferMoneyModal = useCallback(() => {
    dispatch(actions.toggleTransferMoneyModal(true))
  }, [dispatch])

  const openOperationsHistoryModal = () => {
    document.body.style.overflow = 'hidden'
    setIsOperationsHistoryModalVisible(true)
  }

  const closeOperationsHistoryModal = () => {
    document.body.style.overflow = 'initial'
    setIsOperationsHistoryModalVisible(false)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container maxWidth="lg">
          {userInfo && (
            <Toolbar className={classes.toolbar}>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleLogoClick}
              >
                <CasinoIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                SPINER
              </Typography>
              <Typography variant="h6" className={classes.balance}>
                Balance:{' '}
                {datos.state ? (
                  <NumberFormat
                    value={datos.state.balance}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$'}
                    decimalScale="2"
                    fixedDecimalScale={true}
                  />
                ) : (
                  formatter
                    .format((userInfo.balance > -1 && userInfo.balance) || 0)
                    .replace('₽', 'RUB')
                )}
              </Typography>
              {datos.state && datos.state.isLogged ? (
                <>
                  <Typography variant="h6">{datos.state.username}</Typography>
                  <IconButton onClick={handleLogout} color="inherit">
                    <ExitToAppIcon />
                  </IconButton>
                </>
              ) : (
                <Link to={routes.casino} className={styles.close}>
                  <img src={closeIcon} alt="Close" />
                </Link>
              )}
            </Toolbar>
          )}
        </Container>
      </AppBar>
    </div>
  )
}
export default Spin
