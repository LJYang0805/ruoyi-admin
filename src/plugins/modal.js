//确认窗体
export default {
 confirms:(content)=>{
 ElMessageBox.confirm(content, '系统提示', {
  confirmButtonText: '确定',
  cancelButtonText: '取消',
  type:"warning"
})
 },
//成功的消息
  msgSuccess:(content)=>{
 ElMessage.success(content)
}
}