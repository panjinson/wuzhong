import React, { Component, useEffect, useState } from 'react'
// import DeleteMeeting from '../../../Mutations/DeleteMeeting'
import { Button } from 'antd';
import { useHistory, Link } from "react-router-dom";
import { fetchQuery, QueryRenderer, graphql } from 'react-relay';
import dateFormat from '../../../../../ utils/dateFormat'

 function Table(props) {
	 
	 useEffect(
	     () => {
		  window.layui.use('table', function(){
		 		var table = window.layui.table;
		   
		  //第一个实例
		  table.render({
		 		elem: '#demo1'
		 		,height: 312
		 		,data: [{
		 			  "id": "10001"
		 			  ,"username": "苏州市公安局智慧警务交出“平安答卷”"
		 			  ,"originator": "王建国"
		 			  ,"priority": "0"
		 			}, {
		 			  "id": "10002"
		 			  ,"username": "苏州园区公安开创动态巡防新格局"
		 			  ,"originator": "王建国"
		 			  ,"priority": "0"
		 			}, {
		 			  "id": "10003"
		 			  ,"username": "苏州市吴中区警方首次引入无人机水陆空巡防"
		 			  ,"originator": "吴刚"
		 			  ,"priority": "0"
		 			}, {
		 			  "id": "10004"
		 			  ,"username": "苏州市公安局:打造立体化信息化巡防体系"
		 			  ,"originator": "吴刚"
		 			  ,"priority": "0"
		 			}, {
		 			  "id": "10005"
		 			  ,"username": "以“姑苏平”护“苏州安” 姑苏动态巡防体系全面启动"
		 			  ,"originator": "吴刚"
		 			  ,"priority": "0"
		 			}, {
		 			  "id": "10006"
		 			  ,"username": "苏州网格巡防助推警情“连环降”"
		 			  ,"originator": "吴刚"
		 			  ,"priority": "0"
		 			}]
		 		,page: true //开启分页
		 		,cols: [[ //表头
		 		   {checkbox: true}
		 		  ,{field: 'id', title: '通知ID', width:180, sort: true}
		 		  ,{field: 'username', title: '通知名称'}
		 		  ,{field: 'originator', title: '通知发起人', width:250}
		 		  ,{field: 'priority', title: '优先级', width:180, sort: true} 
		 		  ,{field: '', title: "操作", align: "center", width: 160, toolbar: "#bar"}
		 		]]
		  });
	
    
	});
	}
	)
    return (
        <>
            <div>
                <table id="demo1" className="layui-hide1" ></table>
            </div>
            <script type="text/html" id="bar">
                <button type='button' lay-event="go" className='layui-btn layui-btn-normal layui-btn-xs'>
                    <i className="layui-icon">&#xe6b2;</i>详情
                </button>
            </script>
        </>
    )

}
export default Table;