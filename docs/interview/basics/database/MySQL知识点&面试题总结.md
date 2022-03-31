# MySQL知识点&面试题总结

## 关系型数据库介绍

### 什么是关系型数据库？有哪些常见的关系型数据库？

::: details answer

关系型数据库就是一种建立在关系模型的基础上的数据库。关系模型表明了数据库中所存储的数据之间的联系（一对一、一对多、多对多）。

关系模型是指用二维表的形式表示实体和实体间联系的数据模型。常见的关系型数据库包括MySQL、Oracle、SQL Server、SQLite

:::

## MySQL介绍

### MySQL是什么？

::: details answer

MySQL是一种关系型数据库管理系统（RDBMS），主要用于持久化存储我们的系统中的一些数据。

:::

## 存储引擎

### 存储引擎相关的命令？

::: details answer

查看MySQL提供的所有存储引擎

```mysql
show engines;
```

MySQL默认的存储引擎是InnoDB，且只有InnoDB支持事务

查看MySQL当前默认的存储引擎

```mysql
show variables like '%storage_engine%';
```

查看表的存储引擎

```mysql
show table status like 'table_name';
```

:::

### MyISAM 和 InnoDB 的区别?

::: details answer

|                                    | InnoDB                   | MyISAM                   |
| ---------------------------------- | ------------------------ | ------------------------ |
| 是否支持行级锁、表级锁             | 既支持表级锁又支持行级锁 | 支持表级锁，不支持行级锁 |
| 是否支持事务                       | 支持事务                 | 不支持事务               |
| 是否支持外键                       | 支持外键                 | 不支持外键               |
| 是否支持数据库异常崩溃后的安全恢复 | 支持安全恢复             | 不支持安全恢复           |

:::