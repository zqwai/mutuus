﻿<%@ Page Title="" Language="C#" MasterPageFile="~/fee/Site1.Master" AutoEventWireup="true" CodeBehind="r_list.aspx.cs" Inherits="DB.Web.fee.r_list" %>
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
                        <h5>日历列表</h5>
                    </div>
                    <div class="ibox-content">


                        <div class="table-responsive">
                            <div class="dataTables_wrapper form-inline dt-bootstrap">
                            <div class="clearfix m-b">
                                <div class="html5buttons">
                                    <div class="dt-buttons btn-group">
                                          <asp:Button ID="Button1" runat="server" Text="新建日历" CssClass="btn btn-default buttons-csv buttons-html5" OnClick="Button1_Click" />
                                  
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
                                        <th>编号</th>
                                        <th>日期</th>
                                        <th>营业状态</th>
                                         <th>活动</th>
                                        <th class="t-center">操作</th>
                                    </tr>
                                </thead>
                                <tbody>
                                       <asp:Repeater ID="Repeater1" runat="server"   onitemcommand="Repeater1_ItemCommand" OnItemDataBound="Repeater1_OnItemDataBound" >
                                    <ItemTemplate>
                                            <tr>
                                                <td>
                                                   <%#Eval("dtid")%>
                                                </td>
                                                <td><%#Eval("date")%></td>
                                                 <td><%#Eval("statusname")%></td>
                                                  <td runat="server" id="role"><%#Eval("ishot")%></td>
                                              
                                                <td class="t-center">
                                                    <a href='<%#"r_modify.aspx?id="+Eval("dtid")%> ' class="btn btn-info btn-table-eidt" title="修改"  >
                                                        <i class="fa  fa-eye"></i>
                                                    </a>
                                                   
                                                    
                                                    
                                                     <a runat="server" id="qd" href='<%#"kc_qd.aspx?id="+Eval("dtid")%> ' class="btn btn-info btn-table-eidt" title="签到"  data-toggle="tooltip" data-placement="bottom" data-original-title="签到">
                                                        <i class="fa fa-calendar-check-o"></i>
                                                    </a>
                                                    
                                                </td>
                                            </tr>
                                        <asp:HiddenField ID="HiddenField1" runat="server"  Value='<%#Eval("status")%>'/>
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
