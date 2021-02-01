FROM ubuntu
RUN apt-get update
RUN apt-get -y install curl
RUN curl -fsSL https://code-server.dev/install.sh | sh -s -- --dry-run
RUN curl -fsSL https://code-server.dev/install.sh | sh
RUN  useradd mohan
RUN  usermod -d /home/mohan mohan
RUN  mkdir /home/mohan
RUN  chown -R mohan:mohan /home/mohan
ADD startvscode /usr/bin/startvscode
RUN chmod 755 /usr/bin/startvscode
USER mohan
CMD ["startvscode"]
