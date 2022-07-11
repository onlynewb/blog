(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{351:function(t,e,s){"use strict";s.r(e);var a=s(10),v=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"mysql-基础架构你不知道的那些事"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql-基础架构你不知道的那些事"}},[t._v("#")]),t._v(" MySQL 基础架构你不知道的那些事！")]),t._v(" "),e("h2",{attrs:{id:"提出问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#提出问题"}},[t._v("#")]),t._v(" 提出问题：")]),t._v(" "),e("p",[t._v("对于一个做后台不久的我，起初做项目只是实现了功能，所谓的增删改查，和基本查询索引的建立。直到有一个面试官问我一个问题，一条sql查询语句在mysql数据库中具体是怎么执行的？我被虐了，很开心，感谢他。于是开始了深入学习mysql。本篇文章通过")]),t._v(" "),e("blockquote",[e("p",[t._v("一条sql查询语句在mysql数据库中具体是怎么执行的？")])]),t._v(" "),e("p",[t._v("来具体讲解mysql的基础架构。")]),t._v(" "),e("h2",{attrs:{id:"mysql的基础架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql的基础架构"}},[t._v("#")]),t._v(" mysql的基础架构")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("mysql> select * from Student where ID=1;\n")])])]),e("p",[t._v("上面一条简单的查询语句很简单，但我想好多开发者并不知道在MYSQL内部的执行过程。")]),t._v(" "),e("h2",{attrs:{id:"mysql基本架构示意图"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql基本架构示意图"}},[t._v("#")]),t._v(" Mysql基本架构示意图")]),t._v(" "),e("p",[e("img",{attrs:{src:"http://img.xiaogangzai.cn/database_baseFrame_01.png",alt:""}})]),t._v(" "),e("p",[t._v("从图中可以看出Mysql可以大体分为Server层和存储引擎层两部分。")]),t._v(" "),e("p",[t._v("Server层包括连接器、查询缓存、分析器、优化器、执行器等，这些涵盖了MySQL的大多数核心服务和所有的内置函数（如日期、时间、数学和加密函数等），跨存储引擎的功能都在这一层实现，比如存储过程、触发器、视图等。")]),t._v(" "),e("p",[t._v("存储引擎层负责数据的存储和提取，提供数据的读写接口。其架构模式是插件式的，支持InnoDB、MyISAM、Memory等多个存储引擎。目前开发中最常用的存储引擎是InnoDB，它从MySQL5.5.5版本开始成为默认存储引擎，不过开发者也可以通过指定存储引擎的类型来选择别的引擎。")]),t._v(" "),e("p",[t._v("即使存储引擎不同，但是也会共用一个Server层，接下来对Server层中的执行流程，依次对其作用进行讲解。")]),t._v(" "),e("h2",{attrs:{id:"连接器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#连接器"}},[t._v("#")]),t._v(" 连接器")]),t._v(" "),e("p",[t._v("运行查询语句开始查询的前提是第一步先连接数据库，这时候等待你的就是连接器。连接器负责和客户端建立连接、获取权限、维持和管理连接。")]),t._v(" "),e("p",[t._v("常规的开发模式，客户端与服务器需要建立连接。二者在完成经典的TCP握手后，Server层连接器就要开始认证你的身份，这个时候是服务器端代码使用的用户名和密码。")]),t._v(" "),e("p",[t._v("连接器一些内容说明：")]),t._v(" "),e("ul",[e("li",[t._v("连接时：如果用户名或密码不对，服务器端会收到“Access denied for user”的错误，客户端报错无法使用。")]),t._v(" "),e("li",[t._v("连接时：如果用户名密码认证通过，连接器会到权限表中查出你拥有的权限。之后，通过本次连接查询到的权限进行各种逻辑判断，并且都将依赖于此次连接读到的权限(这里要注意也就是说一个数据库用户成功建立连接后，即使你用管理员账号对这个用户的权限做了修改，也不会影响已经存在的连接的权限。修改权限后，只有再建立新的连接才可以使用新设置的权限)")]),t._v(" "),e("li",[t._v("连接完成后：如果一直没有对数据库有操作，则本次连接将处于空闲。show processlist可以查看所有的连接，其中Command列表示的是连接状态中Command列为“Sleep”则表示是一个空闲连接")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("mysql>show processlist\n")])])]),e("ul",[e("li",[e("p",[t._v("连接断开相关：客户端如果太长时间没动静，连接器就会自动将它断开。这个时间是由参数 wait_timeout 控制的，默认值是 8 小时。\n如果在连接被断开之后，客户端再次发送请求的话，就会收到一个错误提醒： Lost connection to MySQL server during query。这时候如果你要继续，就需要重连，然后再执行请求了。数据库里面，长连接是指连接成功后，如果客户端持续有请求，则一直使用同一个连接。短连接则是指每次执行完很少的几次查询就断开连接，下次查询再重新建立一个。")])]),t._v(" "),e("li",[e("p",[t._v("建立连接的过程通常是比较复杂的，所以我建议你在使用中要尽量减少建立连接的动作，也就是尽量使用长连接。")])])]),t._v(" "),e("p",[t._v("较好的连接方式长连接产生的问题以及解决办法：")]),t._v(" "),e("p",[t._v("全部使用长连接后，你可能会发现，有些时候 MySQL 占用内存涨得特别快，这是因为 MySQL 在执行过程中临时使用的内存是管理在连接对象里面的。这些资源会在连接断开的时候才释放。所以如果长连接累积下来，可能导致内存占用太大，被系统强行杀掉（OOM），从现象看就是 MySQL 异常重启了。怎么解决这个问题呢？你可以考虑以下两种方案。")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("定期断开长连接。使用一段时间，或者程序里面判断执行过一个占用内存的大查询后，断开连接，之后要查询再重连。")])]),t._v(" "),e("li",[e("p",[t._v("如果你用的是 MySQL 5.7 或更新版本，可以在每次执行一个比较大的操作后，通过执行 mysql_reset_connection 来重新初始化连接资源。这个过程不需要重连和重新做权限验证，但是会将连接恢复到刚刚创建完时的状")])])]),t._v(" "),e("h2",{attrs:{id:"查询缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查询缓存"}},[t._v("#")]),t._v(" 查询缓存")]),t._v(" "),e("p",[t._v("第一步连接建立完成后，就可以执行查询语句了。第二部:查询缓存。\nMysql确定了查询语句，会先到查询缓存中，看之前是否执行过这条查询语句。之前如果执行过这条查询语句，查询结果可能会以key-value的方式直接缓存在内存中。key是查询的语句，value是查询到的值，这样的话查询缓存会直接把value值返回给客户端。查询语句如果步子查询缓存中，会正常往下执行，获取到新的查询结果后会被存入到查询缓存中。")]),t._v(" "),e("p",[t._v("说明：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("大多数情况下并不建议使用查询缓存。查询缓存往往弊大于利。")]),t._v(" "),e("p",[t._v("查询缓存的失效非常频繁，只要有对某个表的更新，该表的所有查询缓存都会被清空。所以很可能你费劲把结果存起来，还没有使用，就被一个更新全部清空了，尤其是对于更新压力大的数据库来说，查询缓存的命中率很低。但是也不是不能使用，假如一张静态表（系统配置表），很长时间更新一次，这种情况就比较适合使用查询缓存。")])]),t._v(" "),e("li",[e("p",[t._v("如何设置Mysql不使用查询缓存")]),t._v(" "),e("p",[t._v("将Mysql参数query_cache_type设置成DEMAND，这样默认的SQL语句都不使用查询缓存")])]),t._v(" "),e("li",[e("p",[t._v("如何对某一条查询语句指定使用查询缓存\n确定使用查询缓存的语句，可以用SQL_CACHE显示指定")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("mysql> select SQL_CACHE * from Student where ID=1;\n\n")])])])])]),t._v(" "),e("p",[t._v("注意:")]),t._v(" "),e("p",[t._v("Mysql 8.0版本直接将查询缓存对整块功能删除掉了，8.0之后将不再出现查询缓存。")]),t._v(" "),e("h2",{attrs:{id:"分析器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分析器"}},[t._v("#")]),t._v(" 分析器")]),t._v(" "),e("p",[t._v("如果在查询缓存中未找到缓存数据，就会开始真正的执行查询语句。Mysql需要直到这条查询语句要做什么？因此需要对SQL语句做解析。")]),t._v(" "),e("p",[t._v("解析流程：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("词法分析")]),t._v(" "),e("p",[t._v("分析器首先会做词法分析，查询语句中包括了多个字符串和空格组成，Mysql需要识别出里面的字符串分别代表什么。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("mysql> select * from Student where ID=1;\n")])])]),e("p",[t._v('分析这条查询语句，"select"关键字可以识别出是一个查询语句。 字符串"Student"识别出是表名"Student"，把字符串"ID"识别成列"ID"。')])]),t._v(" "),e("li",[e("p",[t._v("语法分析")]),t._v(" "),e("p",[t._v("词法分析后，语句法分析会根据语法规则，判断输入的SQL语句是否满足MySql语法。如果语法不对，会收到“You have an error in your SQL syntax”的错误提醒。例如")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("mysql> elect * from Student where ID=1;\n\nERROR 1064 (42000) You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near 'elect * from t where ID=1' at line 1\n")])])]),e("p",[t._v("技巧:一般语法错误看错误提示的时候，要关注的是紧接“use near”的内容")])])]),t._v(" "),e("h2",{attrs:{id:"优化器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#优化器"}},[t._v("#")]),t._v(" 优化器")]),t._v(" "),e("p",[t._v("分析器执行之后，到达了优化器。")]),t._v(" "),e("p",[t._v("优化器会做那些优化处理：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("当在表中有多个索引的时候，优化器会决定这条查询语句使用哪个索引")])]),t._v(" "),e("li",[e("p",[t._v("一个查询语句有多表关联（join）的时候，决定各个表的连接顺序。")]),t._v(" "),e("p",[t._v("例子如下:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("mysql> select * from t1 join t2 using(ID) where t1.c=10 and t2.d=20;\n")])])]),e("ol",[e("li",[t._v("该例子既可以先从表t1里面取出c=10的记录的ID值，再根据ID值关联到表t2，再判断t2里面d的值是否等于20.")]),t._v(" "),e("li",[t._v("也可以先从表 t2 里面取出 d=20 的记录的 ID 值，再根据 ID 值关联到 t1，再判断 t1 里面 c 的值是否等于 10。")])]),t._v(" "),e("p",[t._v("两种关联查询方案结果肯定是一样的，但是执行效率会有不同，优化器就是决定选择使用哪一个方案。")])])]),t._v(" "),e("h2",{attrs:{id:"执行器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#执行器"}},[t._v("#")]),t._v(" 执行器")]),t._v(" "),e("p",[t._v("MySQL 通过分析器知道了你要做什么，通过优化器知道了该怎么做（执行方案是什么？），于是就进入了执行器阶段，开始执行语句。")]),t._v(" "),e("p",[t._v("开始执行的时候，要先判断一下你对这个表 Student "),e("strong",[t._v("有没有执行查询的权限")]),t._v("，如果没有，就会返回没有权限的错误，如下所示 (在工程实现上，如果命中查询缓存，会在查询缓存返回结果的时候，做权限验证。查询也会在优化器之前调用 precheck 验证权限)。")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("mysql> select * from Student where ID=10;\n \nERROR 1142 (42000): SELECT command denied to user 'b'@'localhost' for table 'Student'\n")])])]),e("p",[t._v("如果有权限，就打开表继续执行。打开表的时候，执行器就会根据表的引擎定义，去使用这个引擎提供的接口。")]),t._v(" "),e("h2",{attrs:{id:"存储引擎"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#存储引擎"}},[t._v("#")]),t._v(" 存储引擎")]),t._v(" "),e("p",[t._v("来到存储引擎，执行存储引擎提供的数据读写接口。\n这条查询语句，"),e("strong",[t._v("执行器")]),t._v("（注意这里读写数据的还是存储引擎）读写数据的流程要分两种情况考虑：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("表 Student 中，ID字段没有索引，执行流程如下：")]),t._v(" "),e("p",[t._v("调用 InnoDB 引擎接口取这个表的第一行，判断 ID 值是不是 1，如果不是则跳过，如果是则将这行存在结果集中；")]),t._v(" "),e("p",[t._v("调用引擎接口取“下一行”，重复相同的判断逻辑，直到取到这个表的最后一行。")]),t._v(" "),e("p",[t._v("执行器将上述遍历过程中所有满足条件的行组成的记录集作为结果集返回给客户端。")]),t._v(" "),e("p",[t._v("至此，这个语句就执行完成了。")])]),t._v(" "),e("li",[e("p",[t._v("表 Student 中，ID字段有索引，那么执行器的执行流程是这样的：")]),t._v(" "),e("p",[t._v("有索引的表，执行的逻辑也差不多。第一次调用的是“取满足条件的第一行”这个接口，之后循环取“满足条件的下一行”这个接口，这些接口都是引擎中已经定义好的。")])])]),t._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),e("p",[t._v("到此，一条查询语句在mysql架构中执行基本流程进行了一个大概的讲解。在这个流程中，会有很多细节和可深挖学习的地方，例如关联（join）、索引、日志系统等，接下来会继续学习并记录一些MySql深入的东西。")])])}),[],!1,null,null,null);e.default=v.exports}}]);