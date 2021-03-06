import React, { Component, useEffect, useState } from 'react'
import { Button,Card } from 'antd';
import { useHistory, Link } from "react-router-dom";
import { fetchQuery, QueryRenderer, graphql } from 'react-relay';
import dateFormat from '../../../../ utils/dateFormat'

const tabListNoTitle = [
  {
    key: '政务公告',
    tab: '政务公告',
  },
  {
    key: '知识库',
    tab: '知识库',
  },
  {
    key: '吐槽池',
    tab: '吐槽池',
  },
];

const contentListNoTitle = {
  政务公告: <div>
	   <Link to={"/Insidepage/Tucao"}>
			<div className="clear">
				<i className="layui-icon reply-fill left_icon" style={{ marginRight: 10 }}>&#xe611;</i>
				<div className="right_text">
					<p>苏州市无新增新冠肺炎确诊病例</p>
					<span>2020-04-08</span>
				</div>
			</div>
			</Link>
			<Link to={"/Insidepage/Tucao"}>
			<div className="clear">
				<i className="layui-icon reply-fill left_icon" style={{ marginRight: 10 }}>&#xe611;</i>
				<div className="right_text">
					<p>苏州市无新增新冠肺炎确诊病例</p>
					<span>2020-04-07</span>
				</div>
			</div>
			</Link>
			<Link to={"/Insidepage/Tucao"}>
			<div className="clear">
				<i className="layui-icon reply-fill left_icon" style={{ marginRight: 10 }}>&#xe611;</i>
				<div className="right_text">
					<p>苏州市无新增新冠肺炎确诊病例</p>
					<span>2020-04-06</span>
				</div>
			</div>
			</Link>
			<Link to={"/Insidepage/Tucao"}>
			<div className="clear">
				<i className="layui-icon reply-fill left_icon" style={{ marginRight: 10 }}>&#xe611;</i>
				<div className="right_text">
					<p>苏州市无新增新冠肺炎确诊病例</p>
					<span>2020-04-05</span>
				</div>
			</div>
			</Link>
		 </div>,
  知识库: <div>
						<Link to={"/Insidepage/Tucao"}>
							<div className="clear">
								<i className="layui-icon reply-fill left_icon" style={{ marginRight: 10 }}>&#xe611;</i>
								<div className="right_text">
									<p>关于新学期疫情防控工作若干问题的...</p>
									<span>2020-04-08</span>
								</div>
							</div>
							</Link>
							<Link to={"/Insidepage/Tucao"}>
							<div className="clear">
								<i className="layui-icon reply-fill left_icon" style={{ marginRight: 10 }}>&#xe611;</i>
								<div className="right_text">
									<p>关于苏州图书馆闭馆期间的常见问题</p>
									<span>2020-04-07</span>
								</div>
							</div>
							</Link>
							<Link to={"/Insidepage/Tucao"}>
							<div className="clear">
								<i className="layui-icon reply-fill left_icon" style={{ marginRight: 10 }}>&#xe611;</i>
								<div className="right_text">
									<p>自动放弃社保声明能否构成不予认定...</p>
									<span>2020-04-06</span>
								</div>
							</div>
							</Link>
							<Link to={"/Insidepage/Tucao"}>
							<div className="clear">
								<i className="layui-icon reply-fill left_icon" style={{ marginRight: 10 }}>&#xe611;</i>
								<div className="right_text">
									<p>基本生活暂时出现严重困难什么意思？</p>
									<span>2020-04-05</span>
								</div>
							</div>
							</Link>
				 </div>,
  吐槽池: <div>
						<Link to={"/Insidepage/Tucao"}>
							<div className="clear">
								<i className="layui-icon reply-fill left_icon" style={{ marginRight: 10 }}>&#xe611;</i>
								<div className="right_text">
									<p>苏州市无新增新冠肺炎确诊病例</p>
									<span>2020-04-08</span>
								</div>
							</div>
							</Link>
							<Link to={"/Insidepage/Tucao"}>
							<div className="clear">
								<i className="layui-icon reply-fill left_icon" style={{ marginRight: 10 }}>&#xe611;</i>
								<div className="right_text">
									<p>苏州市无新增新冠肺炎确诊病例</p>
									<span>2020-04-07</span>
								</div>
							</div>
							</Link>
							<Link to={"/Insidepage/Tucao"}>
							<div className="clear">
								<i className="layui-icon reply-fill left_icon" style={{ marginRight: 10 }}>&#xe611;</i>
								<div className="right_text">
									<p>苏州市无新增新冠肺炎确诊病例</p>
									<span>2020-04-06</span>
								</div>
							</div>
							</Link>
							<Link to={"/Insidepage/Tucao"}>
							<div className="clear">
								<i className="layui-icon reply-fill left_icon" style={{ marginRight: 10 }}>&#xe611;</i>
								<div className="right_text">
									<p>苏州市无新增新冠肺炎确诊病例</p>
									<span>2020-04-05</span>
								</div>
							</div>
							</Link>
	       </div>,
};

export default class TabsCard extends React.Component {
  state = {
    key: 'tab1',
    noTitleKey: '政务公告',
  };

  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };

  render() {
    return (
      <div>
        <Card
          style={{ width: '100%' }}
          tabList={tabListNoTitle}
          activeTabKey={this.state.noTitleKey}
          tabBarExtraContent={<a href="../../../Insidepage/Tucao">...</a>}
          onTabChange={key => {
            this.onTabChange(key, 'noTitleKey');
          }}
		  bordered={false} className="head2 layui-col-md3" style={{ marginTop: 10 }}
        >
          {contentListNoTitle[this.state.noTitleKey]}
        </Card>
      </div>
    );
  }
}
