<?php

class User {

	protected $age;
	protected $email;
	protected $name;

	public function setAge($age)
	{
		if (false === is_numeric($age))
		{
			throw new InvalidArgumentException('Age should be a number');
		}

		if ($age < 25)
		{
			throw new InvalidArgumentException('You are too young');
		}

		if ($age >= 60)
		{
			throw new InvalidArgumentException('You are too old');
		}

		$this->age = $age;
	}

	public function getEstimatedBirthYear()
	{
		return date('Y') - $this->age;
	}

	public function setName($name)
	{
		$this->name = $name;
	}

	public function getName()
	{
		return $this->age;
	}

	public function setEmail($email)
	{
		if (false === filter_var($email, FILTER_VALIDATE_EMAIL))
		{
			throw new InvalidArgumentException('Email incorrect');
		}
		$this->name = $email;
	}

	public function getEmail()
	{
		return $this->email;
	}
}
