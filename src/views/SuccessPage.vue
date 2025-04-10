<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.push('/')
}
</script>

<template>
  <div class="success-page">
    <div class="success-container">
      <h1 class="success-title">Payment Successful!</h1>
      <p class="success-message">
        Your payment has been processed successfully. Your package will be redelivered according to
        the schedule.
      </p>

      <div class="success-footer">
        <p>A confirmation email has been sent to your email address.</p>
        <p>
          If you have any questions, please contact:
          <a href="https://www.usps.com/help/contact-us.htm">USPS Customer Service</a>.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '../styles/variables.less';

.success-page {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: #f8f8f8;
}

.success-container {
  max-width: 600px;
  width: 100%;
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.success-icon {
  margin-bottom: 1.5rem;

  img {
    width: 80px;
    height: 80px;
  }
}

.success-title {
  color: #333366;
  font-size: 2rem;
  margin-bottom: 1rem;
  font-family:
    HelveticaNeueW02-75Bold,
    Helvetica Neue,
    Helvetica,
    Arial,
    sans-serif;
}

.success-message {
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.5;
}

.success-details {
  background: #f8f8f8;
  padding: 1.5rem;
  border-radius: 6px;
  margin-bottom: 2rem;
  text-align: left;
}

.detail-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.8rem;
  font-size: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
}

.detail-label {
  color: #666;
  font-weight: 500;
}

.detail-value {
  color: #333366;
  font-weight: 600;
}

.success-actions {
  margin-bottom: 2rem;

  button {
    font-size: 1.1rem;
    padding: 0.8rem 2rem;
  }
}

.success-footer {
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
  border-top: 1px solid #eee;
  padding-top: 1.5rem;

  a {
    color: #333366;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
}

@media (max-width: @mobile-breakpoint) {
  .success-page {
    padding: 1rem;
  }

  .success-container {
    padding: 1.5rem;
  }

  .success-title {
    font-size: 1.5rem;
  }

  .success-message {
    font-size: 1rem;
  }

  .detail-item {
    font-size: 0.9rem;
  }

  .success-actions button {
    width: 100%;
    font-size: 1rem;
    padding: 0.7rem 1.5rem;
  }
}
</style>
