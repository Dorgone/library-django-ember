from .views import bookAPIView, bookRudView
from django.conf.urls import url

app_name = 'api-books' ## necessary to pu namespace="api-books" in the include in the main urls.py file

urlpatterns = [
    url(r'^$', bookAPIView.as_view(), name='book-create'),
    url(r'^(?P<id>\d+)', bookRudView.as_view(), name='book-rud'),
]
