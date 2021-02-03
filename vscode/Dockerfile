FROM ubuntu
RUN apt-get update
RUN apt-get -y install curl
RUN curl -fsSL https://code-server.dev/install.sh | sh -s -- --dry-run
RUN curl -fsSL https://code-server.dev/install.sh | sh
RUN apt-get -y install sudo
RUN echo "user ALL=(root) NOPASSWD:ALL" > /etc/sudoers.d/user && \
    chmod 0440 /etc/sudoers.d/user
RUN  useradd student
RUN  usermod -d /home/student  -G root -G sudo student 
RUN  mkdir /home/student
RUN  chown -R student:student /home/student
ADD startvscode /usr/bin/startvscode
RUN apt-get install -y openssh-server
RUN mkdir /var/run/sshd

RUN echo 'student:student' |chpasswd
RUN sed -ri 's/^#?PermitRootLogin\s+.*/PermitRootLogin yes/' /etc/ssh/sshd_config
RUN sed -ri 's/UsePAM yes/#UsePAM yes/g' /etc/ssh/sshd_config
RUN mkdir /root/.ssh
RUN apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*
EXPOSE 22
RUN chmod 755 /usr/bin/startvscode
USER student
CMD ["startvscode"]
