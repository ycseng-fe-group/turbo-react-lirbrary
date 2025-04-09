import{j as t}from"./jsx-runtime-DBhXMc9n.js";import{S as e,b as l,c as S,B as b}from"./index-DtySvkwu.js";import"./index-yUhCOHB4.js";import"./index-z4ifl892.js";const g={component:e,argTypes:{dataSource:{name:"Snackbar Notification Storybook",requestType:"success",message:"Congratulations! It was successful!"},options:{isUseAutoHide:!1,autoHideDuration:5e3}}},o={render:function(s){const{setSnackbarNotificationOpen:c,setTargetSnackbarNotificationName:r}=l(),u=S.getState().setIsUseGlobalNotification,f=()=>{u(!1),c(!0)};return r("Snackbar Notification Storybook"),t.jsxs(t.Fragment,{children:[t.jsx(b,{onClick:f,children:"알림 버튼"}),t.jsx(e,{...s})]})},name:"Notification",args:{dataSource:{name:"Snackbar Notification Storybook",requestType:"success",message:"Congratulations! It was successful!"},options:{isUseAutoHide:!1,autoHideDuration:5e3}}};var a,n,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: function Render(props) {
    const {
      setSnackbarNotificationOpen,
      setTargetSnackbarNotificationName
    } = useSnackbarNotificationFunctions();
    const setStoreIsUseGlobalNotification = useGlobalNotificationFunctions.getState().setIsUseGlobalNotification;
    const handleOpenSnackbarNotification = (): void => {
      setStoreIsUseGlobalNotification(false);
      setSnackbarNotificationOpen(true);
    };
    setTargetSnackbarNotificationName("Snackbar Notification Storybook");
    return <>
        <BasicButton onClick={handleOpenSnackbarNotification}>
          알림 버튼
        </BasicButton>
        <SnackbarNotification {...props} />
      </>;
  },
  name: "Notification",
  args: {
    dataSource: {
      name: "Snackbar Notification Storybook",
      requestType: "success",
      message: "Congratulations! It was successful!"
    },
    options: {
      isUseAutoHide: false,
      autoHideDuration: 5000
    }
  }
}`,...(i=(n=o.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const y=["Primary"];export{o as Primary,y as __namedExportsOrder,g as default};
