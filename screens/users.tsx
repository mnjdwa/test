import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { getposts } from "../redux/action/postaction";
import { connect } from "react-redux";
type Props = {
  getposts:Function
}
const Posts = (props:Props) => {
  const [page, setpage] = useState(1)
  const [loading, setloading] = useState(false)
  useEffect(() => {
    props.getposts(10, page)

  }, [page]
  )
console.log(props)
  return (
    <View>
      <Text>check</Text>
    </View>
  );
};
const mapStateToProps = (state:any)=>({
  postsState:state.postState
})
export default connect(mapStateToProps,{getposts})(Posts);