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

![](https://cdn.jsdelivr.net/gh/River-Cold/vuepress-theme-hope-image/img/MySQL基础架构.png)

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

### MyISAM和InnoDB存储引擎使用的锁？

::: details answer

MyISAM和InnoDB存储引擎使用的锁：

- InnoDB支持行级锁和表级锁
- MyISAM只支持表级锁

**表级锁和行级锁对比**：

**表级锁**：

MySQL中**锁定粒度**最大的一种锁，对当前操作的整张表加锁。

- 开销：实现简单，资源消耗（开销）较少。
- 速度：加锁快，不会出现死锁。
- 并发度：触发锁冲突的概率高，并发度低。

**行级锁**：MySQL中**锁定粒度**最小的一种锁，对当前操作的行进行加锁。

- 开销：实现复杂，资源消耗（开销）较大
- 速度：加锁慢，会出现死锁
- 并发度：触发锁冲突的概率低，并发度高。

:::

### InnoDB存储引擎的锁的算法有几种？

::: details answer

1. 记录锁、行锁（Record Lock）：锁定单个行记录的锁，防止其他事务对此行进行update和delete。
2. 间隙锁（Gap Lock）：锁定索引记录间隙（不包含该记录），确保索引记录间隙不变，防止其他事务在这个间隙进行insert，产生幻读。
3. 临键锁（Next-Key Lock）：行锁和间隙锁组合，同时锁住数据，并锁住数据前面的间隙Gap。

:::
