package com.eventoapp;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DriverManagerDataSource;

@Configuration()
public class DataConfiguration {
	@Bean
		public DataSource dataSource() {
			DriverManagerDataSource dataSource = new DriverManagerDataSource();
			 dataSource.setDriverClassName("com.mysql.jdbc.Diver");
		dataSource.setUrl("jdbc:mysql://localhost3306/eventosapp");
		dataSource.setUsername("root");
		dataSource.setPassword("casa1522");
		return dataSource;
	}
}
