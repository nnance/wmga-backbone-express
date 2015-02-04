sudo apt-get -y update
sudo apt-get -y install git

git clone https://github.com/nnance/devops.git

sh ./devops/debian/install-mongodb.sh
sh ./devops/debian/install-nodejs.sh

sudo npm install -g bower grunt-cli grunt

cd /vagrant
sudo npm install
sudo bower install --allow-root
