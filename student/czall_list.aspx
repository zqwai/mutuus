﻿<%@ Page Title="" Language="C#" MasterPageFile="~/student/Site1.Master" AutoEventWireup="true" CodeBehind="czall_list.aspx.cs" Inherits="DB.Web.student.czall_list" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
               <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <title>Mutuus管理系统</title>
    <!-- public -->
    <link href="http://www.imutuus.com/admin/css/bootstrap.min.css" rel="stylesheet">
    <link href="http://www.imutuus.com/admin/font-awesome/css/font-awesome.css" rel="stylesheet">
    <link href="http://www.imutuus.com/admin/css/animate.css" rel="stylesheet">
    <!-- plugins -->
    <link href="http://www.imutuus.com/admin/css/plugins/dataTables/datatables.min.css" rel="stylesheet">
    <!-- coustom -->
    <link href="http://www.imutuus.com/admin/css/style.css" rel="stylesheet">
    <link href="http://www.imutuus.com/admin/css/coustom.css" rel="stylesheet">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
 <div class="wrapper wrapper-content animated fadeInRight">
        <div class="row">
            <div class="col-lg-12">


                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>特征</h5>
                    </div>
                    <div class="ibox-content">


                        <div class="table-responsive">
                            <div class="dataTables_wrapper form-inline dt-bootstrap">
                            <div class="clearfix m-b">
                                <div class="html5buttons">
                                    <div class="dt-buttons btn-group">
                                        <asp:DropDownList ID="DropDownList1" runat="server" AutoPostBack="True" OnSelectedIndexChanged="DropDownList1_SelectedIndexChanged">
                                            <asp:ListItem Value="0">全部</asp:ListItem>
                                            <asp:ListItem Value="1">观察中</asp:ListItem>
                                            <asp:ListItem Value="2">发展中</asp:ListItem>
                                            <asp:ListItem Value="3">发展完成</asp:ListItem>
                                            <asp:ListItem Value="4">发展优异</asp:ListItem>
                                        </asp:DropDownList>
                                        <%--<asp:Button ID="Button1" runat="server" Text="新增早期学习目标" CssClass="btn btn-default buttons-csv buttons-html5" OnClick="Button1_Click" />--%>
                                      <%--  <a class="btn btn-default buttons-csv buttons-html5"><span>CSV</span></a>
                                        <a class="btn btn-default buttons-excel"><span>Excel</span></a>
                                        <a class="btn btn-default buttons-pdf"><span>PDF</span></a>
                                        <a class="btn btn-default buttons-print"><span>Print</span></a>--%>
                                    </div>
                                </div>

                            </div>


                            <table class="table table-striped table-bordered table-hover dataTables" >
                                <thead>
                                    <tr>

                                         <th>学生编号</th>
                                        <th>姓名</th>
                                        <th>目标编号</th>
                                         <th>目标名称</th>
                                         <th>创建月份</th>
                                         <th>状态</th>


                                        <th class="t-center">操作</th>
                                    </tr>
                                </thead>
                                <tbody>
                                       <asp:Repeater ID="Repeater1" runat="server"   onitemcommand="Repeater1_ItemCommand" OnItemDataBound="Repeater1_OnItemDataBound" >
                                    <ItemTemplate>
                                            <tr>

                                                <td><%#Eval("uid")%></td>
                                                    <td><%#Eval("uname")%></td>
                                                  <td><%#Eval("jnid")%></td>
                                                  <td><%#Eval("jnname")%></td>
                                                 <td><%#Eval("date")%></td>
                                                 <td runat="server" id="s1"><%#Eval("status")%></td>


                                                <td class="t-center">
                                                    <a href='<%#"cz_modify.aspx?id="+Eval("umbid")%> ' class="btn btn-info btn-table-eidt" title="新增目标"  >
                                                       修改目标状态
                                                    </a>






                                                </td>
                                            </tr>
                                    </ItemTemplate>
                                </asp:Repeater>


                                    </tbody>


                            </table>
                                   <div class="dataTables_paginate paging_simple_numbers">

                                        共<asp:Label ID="lb_count" runat="server" Text="Label"></asp:Label>条记录
                                        共<asp:Label ID="lb_page" runat="server" Text="Label"></asp:Label>页 ;
                                        当前第<asp:Label ID="lb_CurrentPage" runat="server" Text="1"></asp:Label>页
                                        <asp:LinkButton ID="LinkFirst" runat="server" OnClick="LinkFirst_Click">首页</asp:LinkButton>
                                        <asp:LinkButton ID="LinkUp" runat="server" OnClick="LinkUp_Click">上一页</asp:LinkButton>
                                        <asp:LinkButton ID="LinkDown" runat="server" OnClick="LinkDown_Click">下一页</asp:LinkButton>
                                        <asp:LinkButton ID="LinkLast" runat="server" OnClick="LinkLast_Click">尾页</asp:LinkButton>
                                        转到第<asp:DropDownList ID="DropDownList3" runat="server" OnSelectedIndexChanged="DropDownList3_SelectedIndexChanged" AutoPostBack="True"></asp:DropDownList>页

                                    </div>


                        </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    </div>
</asp:Content>
