import { connect } from "react-redux"

import { fetchMenus } from "../../../store/admin/menu/duck/actions"

import AboutComponent from "./component"

const AboutContainer = connect(
  // Map state to props
  state => ({
    data: state.admin.menu.data
  }),

  // Map actions to props
  {
    fetchMenus
  }
)(AboutComponent)

export default AboutContainer
